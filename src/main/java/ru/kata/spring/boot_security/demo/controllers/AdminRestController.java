package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/admin/api/")
public class AdminRestController {

    private final UserService userService;

    @Autowired
    public AdminRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public ResponseEntity<List<User>> getAllUser() {
        return ResponseEntity.ok(userService.allUsers());
    }

    @PostMapping()
    public ResponseEntity<List<User>> createUser(@RequestBody User user) {
        userService.saveUser(user);
        return ResponseEntity.ok(userService.allUsers());
    }

    @PutMapping()
    public ResponseEntity<List<User>> updateUser(@RequestBody User user) {
        System.out.println("VOT eto vxodit " + user.toString());
        userService.updateUser(user);
        return ResponseEntity.ok(userService.allUsers());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<User>> deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok(userService.allUsers());
    }
}