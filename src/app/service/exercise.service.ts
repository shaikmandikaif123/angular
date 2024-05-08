import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from '../entity/Exercise';


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'assets/exercises.json'; // Path to your exercises JSON file

  constructor(private http: HttpClient) {}

  /**
   * Fetches all exercises from the JSON file.
   * @returns An Observable emitting an array of Exercise objects.
   */
  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.apiUrl);
  }

  /**
   * Marks an exercise as completed or not completed in the JSON file.
   * @param exerciseId The ID of the exercise to mark.
   * @param completed The completion status to set for the exercise.
   * @returns An Observable indicating the success or failure of the mark operation.
   */
  markExerciseCompleted(exerciseId: number, completed: boolean): Observable<any> {
    
    return this.http.patch<any>(`${this.apiUrl}/${exerciseId}`, { completed });
  }

  /**
   * Fetches completed exercises from the JSON file.
   * @returns An Observable emitting an array of completed Exercise objects.
   */
  getCompletedExercises(): Observable<Exercise[]> {
   
    return this.http.get<Exercise[]>(`${this.apiUrl}/completed`);
  }
}
