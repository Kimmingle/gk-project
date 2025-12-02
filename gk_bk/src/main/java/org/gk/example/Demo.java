package org.gk.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Demo {

    public static void main(String[] args) {
        System.out.println("한글 출력 테스트");
        SpringApplication.run(Demo.class, args);
    }
}
