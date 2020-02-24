import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EducationBoard } from './education-board';


@Injectable()
export class EducationBoardService
{
private url="http://localhost:7788"
constructor(private http: HttpClient)
{
    
}
saveEducationBoard(educationBoard: EducationBoard)
{
    return this.http.post(this.url + "/saveEducationBoard", educationBoard);
}
readEducationBoards()
{
    return this.http.get<EducationBoard[]>(this.url + "/readEducationBoards");
}
deleteEducationBoard(id)
{
    return this.http.delete(this.url + "/deleteEducationBoard/" + id);

}
readEducationBoard(id)
{
    return this.http.get<EducationBoard>(this.url + "/readEducationBoard/" + id);
}
}