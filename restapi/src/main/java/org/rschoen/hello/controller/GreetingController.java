package org.rschoen.hello.controller;


import org.rschoen.hello.Greeting;
import org.rschoen.hello.service.GreetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greetings")
public class GreetingController {
    private final GreetingService greetingService;

    @Autowired
    public GreetingController(GreetingService greetingService) { this.greetingService = greetingService; }

    @RequestMapping("/standard")
    public Greeting greeting(@RequestParam(value = "name",defaultValue = "World") String name) {
        return greetingService.Greeting(name);
    }


}
