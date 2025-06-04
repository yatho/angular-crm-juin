import { Component, inject, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Consumer } from '../consumer';
import { Unsubscribe } from '../../common/unsubscribe';
import { ConsumerData } from '../model/consumer';
import { Location } from '@angular/common';
import { MatFormField, MatLabel, MatInput } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { Help } from '../../component/help/help';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'crm-fiche',
    templateUrl: './fiche.html',
    styleUrl: './fiche.scss',
    imports: [ReactiveFormsModule, MatFormField, MatSelect, MatOption, Help, MatLabel, MatInput, MatIconButton, MatIcon]
})
export class Fiche extends Unsubscribe implements OnInit {
  private readonly consumerService = inject(Consumer);
  private readonly location = inject(Location);

  protected id = input<number | undefined>();

  protected consumerForm = new FormGroup({
    id: new FormControl<number | undefined>(undefined, {
      nonNullable: true
    }),
    civility: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    firstname: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    lastname: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true
    }),
    phone: new FormControl('', {
      validators: [Validators.required, Validators.pattern('^0[1-9]([-. ]?[0-9]{2}){4}$')],
      nonNullable: true
    })
  });

  ngOnInit() {
    if(this.id()) {
      this.subscriptionList.push(
        this.consumerService.getById(this.id()!).subscribe(
          (c: ConsumerData) => this.consumerForm.patchValue(c)
        )
      );
    }
  }

  onSubmit() {
    if (this.consumerForm.invalid) {
      return;
    }
    const c = this.consumerForm.getRawValue();
    let consumerObs;
    if (c.id) {
      consumerObs = this.consumerService.update(c);
    } else {
      consumerObs = this.consumerService.create(c);
    }
    this.subscriptionList.push(consumerObs.subscribe(() => this.location.back()));
  }

  cancel() {
    this.location.back();
  }
}
