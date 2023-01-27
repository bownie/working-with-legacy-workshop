import static spark.Spark.*;

public class WhizzoWorker {

    // Using class variable for async returns
    //
    private static String marina_name = "";

    public static void main(String[] args) {

        port(8080);

        get("/", (req, res) -> "Hello from Whizzo Worker!");

        String[] nameList = {"A", "B", "C"};

        try {
            marina_name = database.DatabaseQueries.connect(nameList);
        } catch (Exception e) {
            System.out.println("Caught problem with database select " + e.getMessage());
        }

        get("/select", (req, res) -> "Marina name = " + marina_name);
    }
}
