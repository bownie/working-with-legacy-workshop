import static spark.Spark.*;

public class WhizzoWorker {

    // Using class variable for async returns
    //
    private static String marinaName = "";

    public static void main(String[] args) {

        port(8080);

        get("/", (req, res) -> "Hello from Whizzo Worker!");

        String[] nameList = {"A", "B", "C"};

        try {
            marinaName = database.DatabaseQueries.connect(nameList);
        } catch (Exception e) {
            System.out.println("Caught problem with database select " + e.getMessage());
        }

        get("/select", (req, res) -> "Marina name = " + marinaName);
    }
}
