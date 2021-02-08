import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { SharedService } from '../../../shared/services/shared.service';
import { AdminService } from '../shared/services/admin.service';
import { ImageUploaderService } from './../../../shared/services/image-uploader.service';

@Component({
  selector: 'supermarket-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    image_src: ['', Validators.required],
  });
  selectedFile: File;
  showProgress;
  updateConfig: { isEdit: boolean; product: Product } = {
    isEdit: false,
    product: null,
  };
  constructor(
    private fb: FormBuilder,
    private imageUploader: ImageUploaderService,
    private adminService: AdminService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const { id } = this.activateRoute.snapshot.queryParams;
    this.sharedService.getProdcut(id).subscribe((response: any) => {
      this.updateConfig.isEdit = true;
      this.updateConfig.product = response;
      this.form.patchValue({
        title: response.title,
        description: response.description,
        price: response.price,
        image_src: response.image_src,
      });
    });
  }

  onSelectFile($event) {
    this.selectedFile = <File>$event.target.files[0];
    this.showProgress = true;
    this.imageUploader
      .onUploadImage('file', '/files/upload', this.selectedFile)
      .subscribe((response: any) => {
        if (response.file_name) {
          this.form.patchValue({
            image_src: response.file_name,
          });
          this.showProgress = false;
        }
      });
  }

  onSubmitForm() {
    if (this.updateConfig.isEdit) {
      this.adminService
        .updateProduct(this.form.value, this.updateConfig.product._id)
        .subscribe((response) => {
          this.router.navigate(['/admin/manage']);
        });
    } else {
      this.adminService
        .addProducts(this.form.value)
        .subscribe((response: any) => {
          if (response.id) {
            this.router.navigate(['/admin/manage']);
          }
        });
    }
  }
}
