package org.example.backend.service.impl;

import org.example.backend.dto.UpdateUserDTO;
import org.example.backend.dto.UserDTO;
import org.example.backend.entity.User;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.UserService;
import org.example.backend.util.VarList;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), getAuthority(user));
    }

    public UserDTO loadUserDetailsByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        return modelMapper.map(user,UserDTO.class);
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole()));
        return authorities;
    }

    @Override
    public UserDTO searchUser(String username) {
        if (userRepository.existsByEmail(username)) {
            User user=userRepository.findByEmail(username);
            return modelMapper.map(user,UserDTO.class);
        } else {
            return null;
        }
    }

    @Override
    public int deleteUser(long userId) {
        if (userRepository.existsByUserId(userId)) {
            userRepository.deleteById(userId);
            return VarList.OK;
        } else {
            return VarList.Not_Found;
        }
    }

    public int updateUser(UpdateUserDTO dto) {

        System.out.println("This id the DTO "+dto);

        if (!userRepository.existsByUserId(dto.getUserId())) {
            return VarList.Not_Found;
        }

        User user = userRepository.findByUserId(dto.getUserId());
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        // Check if old password matches
        if (!encoder.matches(dto.getOldPassword(), user.getPassword())) {
            return VarList.Unauthorized; // or any constant representing wrong password
        }

        // Update fields
        user.setUsername(dto.getUsername());
        user.setPhone(dto.getPhone());


        // If new password is not empty, update it
        if (dto.getNewPassword() != null && !dto.getNewPassword().isEmpty()) {
            user.setPassword(encoder.encode(dto.getNewPassword()));
        }

        userRepository.save(user);
        return VarList.OK;
    }

    @Override
    public List<UserDTO> getAllUsers() {
        userRepository.findAll();
        return modelMapper.map(userRepository.findAll(),new TypeToken<List<UserDTO>>(){}.getType());
    }


    @Override
    public int saveUser(UserDTO userDTO) {
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            return VarList.Not_Acceptable;
        } else {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            userRepository.save(modelMapper.map(userDTO, User.class));
            return VarList.Created;
        }
    }

    @Override
    public UserDTO getUser(long id) {
        return modelMapper.map(userRepository.findById(id),UserDTO.class);
    }
}
