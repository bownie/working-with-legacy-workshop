import static spark.Spark.*;
import mariadb.*;

public class App {

    //private mariadb.MariaDBSelect selector = new mariadb.MariaDBSelect();

    public static void main(String[] args) {

        port(8080);

        get("/", (req, res) -> "Hello from Whizzo Worker!");

        //mariadb.MariaDBSelect.connect();

//        get("/select", (req, res) -> );
    }
}
