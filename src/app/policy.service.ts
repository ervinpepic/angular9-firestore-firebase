import { Injectable } from '@angular/core';

//third party imports

import { AngularFirestore } from '@angular/fire/firestore';
import { Policy } from 'src/app/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private fajrstor: AngularFirestore) { }

  getPolicies(){
    return this.fajrstor.collection('policies').snapshotChanges();
  
  }

  createPolicy(policy: Policy) {
    return this.fajrstor.collection('policies').add(policy);
  }

  updatePolicy(policy: Policy) {
    delete policy.id;
    this.fajrstor.doc('policies/' + policy.id).update(policy);
  }

  deletePolicy(policyId: string) {
    this.fajrstor.doc('policies/' + policyId).delete();
  }
}
