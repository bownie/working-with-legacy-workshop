import static spark.Spark.*;
import java.lang.Exception;
import mariadb.*;

public class App {

    //private mariadb.MariaDBSelect selector = new mariadb.MariaDBSelect();

    public static void main(String[] args) {

        port(8080);

        get("/", (req, res) -> "Hello from Whizzo Worker!");


        String[] nameList = {"A", "B", "C"};
        try {
            mariadb.MariaDBSelect.connect(nameList);
        } catch (Exception e) {
            System.out.println("Caught problem with database select " + e.getMessage());
        }

        get("/select", (req, res) -> "SELECT");
    }
}
