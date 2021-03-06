import { Component, OnInit }    from '@angular/core';
import { OrdersService }        from '../orders.service';
import { IOrder }               from '../../shared/models/order.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'esh-orders_detail',
    styleUrls: ['./orders-detail.component.scss'],
    templateUrl: './orders-detail.component.html'
})
export class OrdersDetailComponent implements OnInit {
    order = {}; // new order

    constructor(private service: OrdersService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getOrder(id);
        });
    }

    getOrder(id: number) {
        this.service.getOrder(id).subscribe(order => {
            this.order = order;
            console.log('order retrieved: ' + order.ordernumber);
            console.log(this.order);
        });
    }
}

