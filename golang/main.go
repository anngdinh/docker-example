package main

import (
	"database/sql"
	"fmt"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	for {
		testDB()
		fmt.Println("Test DB oke !")
		time.Sleep(10 * time.Second)
	}
}

func testDB() {
	db, err := sql.Open("mysql", os.Getenv("URL"))
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()
	insert, err := db.Query(os.Getenv("QUERY"))
	if err != nil {
		panic(err.Error())
	}
	defer insert.Close()
}
