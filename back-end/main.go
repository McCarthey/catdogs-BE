package main

import (
	"fmt"
	"net/http"
	"time"

	"catdogs.club/back-end/models"
	"catdogs.club/back-end/routers"
)

func init() {
	models.InitModel()
}

func main() {
	runServer()
}

func runServer() {
	router := routers.InitRouter()

	s := &http.Server{
		Addr:           ":8888",
		Handler:        router,
		ReadTimeout:    18 * time.Second,
		WriteTimeout:   18 * time.Second,
		MaxHeaderBytes: 1 << 28,
	}

	err := s.ListenAndServe()
	if err != nil {
		fmt.Println(err)
	}
}
