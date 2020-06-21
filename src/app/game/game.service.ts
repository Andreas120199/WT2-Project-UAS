import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: "root"
})
export class GameService {
    baseUrl = `https://rawg-video-games-database.p.rapidapi.com`;
    tokenRapiAPI = "60f7f7a0e0msh51ed54d5328dd69p12f043jsn5414e5a6e4ce";
    hostKey = "rawg-video-games-database.p.rapidapi.com";

    constructor(private http: HttpClient) {

    }

    getGames() {
        return this.http.get(
            `${this.baseUrl}/games`,
            { headers: this.getCommonHeaders() }
        )
    }
    getGame(name: string){
        return this.http.get(`${this.baseUrl}/games/name/${name}`);
    }
    
    getCommonHeaders() {
        return {
            "Content-Type": "application/json",
            "x-rapidapi-host": this.hostKey,
            "x-rapidapi-key": this.tokenRapiAPI,
        }
    }

}
