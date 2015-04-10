package com.example.jwbc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

    @RequestMapping(value = {"/index.do", "/"})
    public String index () {
        return "index";
    }
    
    @RequestMapping(value = "/login.do")
    public String login () {
        return "login";
    }
}
