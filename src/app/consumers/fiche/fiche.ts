import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Consumer } from '../consumer';
import { Unsubscribe } from '../../common/unsubscribe';
import { ConsumerData } from '../model/consumer';
import { Location } from '@angular/common';

@Component({
  selector: 'crm-fiche',
  standalone: false,
  templateUrl: './fiche.html',
  styleUrl: './fiche.scss'
})
export class Fiche extends Unsubscribe implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly consumerService = inject(Consumer);
  private readonly location = inject(Location);

  protected consumerForm = new FormGroup({
    id: new FormControl<number | undefined>(undefined, {
      nonNullable: true
    }),
    civility: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    firstname: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      nonNullable: true
    }),
    lastname: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
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
    this.subscriptionList.push(this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const idAsString = params.get('id');
        if (idAsString) {
          const id: number = parseInt(idAsString, 10);
          this.consumerService.getById(id).subscribe(
            (c: ConsumerData) => this.consumerForm.patchValue(c)
          );
        }
      }
    ));
  }

  onSubmit() {
    const c: ConsumerData = this.consumerForm.getRawValue();
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
