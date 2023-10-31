import { Component } from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Observable, Observer, Subscription} from "rxjs";
import {ProcessStep} from "../../models/api.model";

@Component({
  selector: 'app-process-steps',
  templateUrl: './process-steps.component.html',
  styleUrls: ['./process-steps.component.scss']
})
export class ProcessStepsComponent {
  stepDescription$: Subscription | undefined;
  stepsObservable$: Observable<any> | undefined;
  selectStepOptions: number[] = [];
  editProcessStep: ProcessStep = {description:'', mandatory: false}
  submittingNewStep: boolean = false;
  loadingProcessSteps: boolean = false;
  message: string = '';

  constructor(private backendService: BackendService) {
  }

  ngOnInit() {
  }

  showProcessSteps() {
    this.loadingProcessSteps = true;
    this.backendService.getProcessSteps().subscribe({
      next: (processSteps: ProcessStep[]) => {
        this.stepsObservable$ = new Observable((observer: Observer<ProcessStep>) => {
          processSteps.forEach((processStep:ProcessStep, index) => {
            setTimeout(() => {
              processStep.order = index + 1;
              observer.next(processStep);
              if (index === processSteps.length - 1) {
                setTimeout(() => {
                  observer.complete();
                }, 5000);
              }
            }, 3000 * index);
          });
        });
        this.stepDescription$ = this.stepsObservable$.subscribe({
          next(item: string) {
            console.log('Current item: ', item);
          },
          complete() {
            console.log('Completed');
          },
          error(msg: Error) {
            console.log('Error Getting items: ', msg);
          }});

        setTimeout(() => {
          this.stepDescription$?.unsubscribe();
        }, 15000);
      },
      error: (err: any) => console.log('Retrieving processSteps from backend failed.'),
      complete: () => this.loadingProcessSteps = false
    })
  }

  addProcessStep() {
    this.submittingNewStep = true;
    this.message = '';
    this.backendService.storeProcessStep(this.editProcessStep).subscribe({
      next: (reply) => {
        this.editProcessStep.order = undefined;
        if (reply) {
          this.message = reply.result;
        } else {
          this.message = 'Het toevoegen van een proces stap is mislukt.';
        }
      },
      error: (error) => {
        this.message = 'Het toevoegen van een proces stap is mislukt.<br>De foutmelding is:<br> ' + error.message;
      },
      complete: () => {
        this.submittingNewStep = false;
      }
    })
  }

  selectStepNr() {
    this.message = '';
    this.backendService.getNumberOfProcessSteps().subscribe((count:number) => {
      this.selectStepOptions = new Array(count - 1);
      for (let index = 0; index < this.selectStepOptions.length; index++) {
        this.selectStepOptions[index] = index + 1;
      }
    })
  }

}