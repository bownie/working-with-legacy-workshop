package database;

import java.sql.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import org.apache.log4j.Logger;


public class DatabaseQueries {

  private static final String DB_USER = System.getenv("DATABASE_USER");
  private static final String DB_PASS_FILE = System.getenv("DATABASE_PASSWORD_FILE");
  private static final String DB_URL = "jdbc:mariadb://" + System.getenv("DATABASE_HOST") +
                                       ":" + System.getenv("DATABASE_PORT") + "/" + System.getenv("DATABASE_DB");

  private static final Logger logger = Logger.getLogger(DatabaseQueries.class);

  public static String connect(String [] args) throws Exception {

    //System.out.println("DB connection string = " + DB_URL);
    //System.out.println("DB_PASS_FILE = " + DB_PASS_FILE);

    String db_pass = new String(Files.readAllBytes(Paths.get(DB_PASS_FILE)));
    //System.out.println("DB_PASS = " + db_pass);

    logger.info("Connection string = " + DB_URL);

    // Connect to the database
    Connection conn = DriverManager.getConnection(DB_URL, DB_USER, db_pass);

    // Insert the data into the MariaDB table
    String tableName = "wb_marina";
    String query = "select * from  " + tableName;

    String marina_name = "";

    try (Statement stmt = conn.createStatement()) {
      ResultSet rs = stmt.executeQuery(query);
      while (rs.next()) {
        marina_name = rs.getString("marina_name");
        /* int supplierID = rs.getInt("SUP_ID");
        float price = rs.getFloat("PRICE");
        int sales = rs.getInt("SALES");
        int total = rs.getInt("TOTAL");*/
        System.out.println(marina_name);
        logger.info("Marina name: "+ marina_name);
      }
    } catch (SQLException e) {
      System.err.println("SQL Exception = " + e.getMessage());
      logger.error("SQL Exception = " + e.getMessage());
    }

    conn.close();

    return marina_name;
  }
}
