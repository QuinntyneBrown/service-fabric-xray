﻿import {Service} from './../models/service';
import {DeployedReplicaViewModel} from './deployedreplicaviewmodel';
import {ViewModel} from './viewmodel';
import {List} from './list';

export class DeployedServiceViewModel extends ViewModel<DeployedServiceViewModel> {

    public elementHeight: number;

    public constructor(
        public expanded: boolean,
        public selectedMetric: number,
        public selectedClass: string,
        public service: Service,
        public replicas: DeployedReplicaViewModel[]) {
        super(service.name);
    }

    public copyFrom(other: DeployedServiceViewModel): void {
        
        this.service = other.service;
        this.selectedMetric = other.selectedMetric;
        this.selectedClass = other.selectedClass;

        if (!this.replicas) {
            this.replicas = [];
        }
        
        List.updateList(this.replicas, other.replicas);
    }
}