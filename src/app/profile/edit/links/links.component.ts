import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Link } from '../../../data/profile.model';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements OnInit {
  @Input() links: Link[];
  @Output() linksChange = new EventEmitter<Link[]>();
  public linksForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.setLinks(this.links || []);
    this.listenChanges();
  }

  private createForm() {
    this.linksForm = this.fb.group({
      links: this.fb.array([]),
    });
  }

  private setLinks(links: Link[]) {
    const linkFG = links.map((link) => this.fb.group(link));
    this.linksForm.setControl('links', this.fb.array(linkFG));
  }

  private listenChanges() {
    this.linksForm.valueChanges.subscribe((links) => {
      const formattedLinks = links.links.map((link: Link) => ({
        name: link.name,
        url: link.url,
      }));
      this.linksChange.emit(formattedLinks);
    });
  }

  get linksArray(): FormArray {
    return this.linksForm.get('links') as FormArray;
  }

  clear(index: number) {
    const linkGroup = this.linksArray.at(index) as FormGroup;
    linkGroup.patchValue({
      url: '',
    });
  }
}
