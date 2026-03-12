package org.example.backend.service;

import org.example.backend.dto.UpdateUserDTO;
import org.example.backend.dto.UserDTO;

import java.util.List;

public interface UserService  {
    int saveUser(UserDTO userDTO);
    UserDTO searchUser(String username);
    int deleteUser(long userId);
    int updateUser(UpdateUserDTO updateUserDTO);
    List<UserDTO> getAllUsers();
    UserDTO getUser(long id);
}
