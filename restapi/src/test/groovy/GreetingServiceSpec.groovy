import org.rschoen.hello.service.GreetingService

public class GreetingServiceSpec extends spock.lang.Specification {
    def "Saying Hello"() {
        when: "The greeting Class is created"
        def greeter = new GreetingService();


        then: "The greeting should be correct"
        greeter.Greeting("world").getContent() == "Hello, world!"
    }
}