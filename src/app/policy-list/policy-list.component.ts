import { Component, OnInit } from '@angular/core';


//third party imports
import { PolicyService } from '../policy.service';
import { Policy } from '../policy.model';


@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

  policies: Policy[];

  constructor(private polisiServis: PolicyService) { }

  ngOnInit() {
    this.polisiServis.getPolicies().subscribe(podaci => {
      this.policies = podaci.map(objekatGet => {
        return {
          id: objekatGet.payload.doc.id,
          ...objekatGet.payload.doc.data
        } as Policy;
      })
    });
  }

  createPolicy(policy: Policy) {
    this.polisiServis.createPolicy(policy);
  }

  updatePolicy(policy: Policy) {
    this.polisiServis.updatePolicy(policy);
  }

  deletePolicy(id: string) {
    this.polisiServis.deletePolicy(id);
  }

}
