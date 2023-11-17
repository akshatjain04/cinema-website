import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
public class ScreenController {

    @Autowired
    private Repository repository;

    @GetMapping("/screens")
    public List<Screen> getAllScreens() {
        return repository.findAll();
    }

    @PostMapping("/screens")
    public Screen createScreen(@Valid @RequestBody Screen screens) {
        screens.set_id(ObjectId.get());
        repository.save(screens);
        return screens;
    }

    @PostMapping("/screens/seats")
    public Screen createScreenSeats(@Valid @RequestBody Screen screens) {
        screens.set_id(ObjectId.get());
        repository.save(screens);
        return screens;
    }

    // Additional methods and class members...
}
