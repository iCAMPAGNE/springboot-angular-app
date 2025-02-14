import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Observable, Observer, Subscription} from "rxjs";
import {ProcessStep} from "../../models/api.model";

@Component({
    selector: 'app-process-steps',
    templateUrl: './process-steps.component.html',
    styleUrls: ['./process-steps.component.scss'],
    standalone: false
})
export class ProcessStepsComponent implements OnInit {
  stepDescription$: Subscription | undefined;
  stepsObservable$: Observable<any> | undefined;
  selectStepOptions: any[] = [{value:-1,text:'Loading...'}];
  editProcessStep: ProcessStep = {description:'', mandatory: false}
  loadingNumberOfStep: boolean = false;
  submittingNewStep: boolean = false;
  loadingProcessSteps: boolean = false;
  message: string = '';

  constructor(private backendService: BackendService) {
  }

  ngOnInit() {
    this.updateSteps();
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
            console.log('stepsObservable$ completed');
          },
          error(msg: Error) {
            console.log('Error Getting items: ', msg);
          }
        });
        setTimeout(() => {
          this.stepDescription$?.unsubscribe();
        }, 15000);
      },
      error: error => {
        console.log('Retrieving processSteps from backend failed.', error);
        this.loadingProcessSteps = false;
      },
      complete: () => {
        console.log('stepsObservable$ completed');
        this.loadingProcessSteps = false;
      }
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
          this.updateSteps();
        } else {
          this.message = 'Het toevoegen van een proces stap is mislukt.';
        }
      },
      error: (error) => {
        this.message = 'Het toevoegen van een proces stap is mislukt.<br>De foutmelding is:<br> ' + error.message;
        this.submittingNewStep = false;
      },
      complete: () => {
        this.submittingNewStep = false;
      }
    })
  }

  updateSteps() {
    this.loadingNumberOfStep = true;
    this.selectStepOptions =[];
    this.message = '';
    this.backendService.getNumberOfProcessSteps().subscribe((count:number) => {
      this.selectStepOptions = new Array(count + 1);
      this.selectStepOptions[0] = {value:0,text:'bovenaan'};
      for (let index = 1; index < count; index++) {
        this.selectStepOptions[index] = {value:index,text:'Na stap ' + index};
      }
      this.selectStepOptions[count] = {value:count,text:'onderaan'};
      this.loadingNumberOfStep = false;
    })
  }
}
