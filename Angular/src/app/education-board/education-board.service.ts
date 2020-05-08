import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EducationBoard } from './education-board';

@Injectable()
export class EducationBoardService{


    private url="http://localhost:2222";


    constructor(private http: HttpClient){}


      /* first Service method */
      saveBoard(board){
        return this.http.post(this.url + "/saveBoard", board);
      }
  
      /* Second Service method */
      readBoards(){
        return this.http.get<EducationBoard[]>(this.url + "/readBoards");
      }
  
      /* Third Service method */
      readBoard(id){
          return this.http.get<EducationBoard>(this.url + "/readBoard/" + id); 
      }
  
      /* Fourth Service method */
      deleteBoard(id){
          return this.http.delete(this.url + "/deleteBoard/" + id); 
      }

}