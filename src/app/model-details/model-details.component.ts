import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {

  modelDetailsForm! : FormGroup;

  get licensesControls() {
    return (this.modelDetailsForm.get('modelInfo')?.get('licenses') as FormArray).controls;
  }

  get referencesControls() {
    return (this.modelDetailsForm.get('modelInfo')?.get('references') as FormArray).controls;
  }

  ngOnInit(): void {
    this.modelDetailsForm = new FormGroup({
      modelInfo: new FormGroup({
        modelName: new FormControl(null, [Validators.required ]),
        modelOverview: new FormControl(null, [Validators.required],),
        regulatoryRequirements:new FormGroup({
          HKMA:new FormControl(null),
          FCAandBANK:new FormControl(null),
        }),
        documentation: new FormControl(null),
        licenses: new FormArray([
          new FormControl(null),
        ]),
        references: new FormArray([
          new FormControl(null),
        ]),
        path:new FormControl(null),
      }),
    });

  }

  onSubmit(){
    console.log(this.modelDetailsForm.value)
  }

  onAddField(fieldName: string){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.modelDetailsForm.get('modelInfo')?.get(fieldName)).push(control);
  }

  onDeleteField(i: number, fieldName:string){
    (<FormArray>this.modelDetailsForm.get('modelInfo')?.get(fieldName)).removeAt(i)
  }


}
