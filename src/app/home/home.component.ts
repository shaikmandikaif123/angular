import { Component, OnInit } from '@angular/core';
import { Exercise } from '../entity/Exercise';
import { ExerciseService } from '../service/exercise.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.fetchExercises();
  }

  fetchExercises(): void {
    this.exerciseService.getExercises().subscribe(
      exercises => {
        this.exercises = exercises;
      },
      error => {
        console.error('Error fetching exercises:', error);
      }
    );
  }

  markCompleted(exercise: Exercise): void {
    this.exerciseService.markExerciseCompleted(exercise.id, true).subscribe(
      () => {
        console.log('Exercise marked as completed:', exercise.name);
        exercise.completed = true;
      },
      error => {
        console.error('Error marking exercise as completed:', error);
      }
    );
  }
}
