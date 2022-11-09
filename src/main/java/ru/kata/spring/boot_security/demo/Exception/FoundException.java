package ru.kata.spring.boot_security.demo.Exception;

public class FoundException extends RuntimeException {
    public FoundException() {
        System.out.println("Email is already used!");
    }
}
