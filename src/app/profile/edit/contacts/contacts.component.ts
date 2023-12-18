import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Contact } from '../../../data/profile.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  @Input() contacts: Contact[];
  @Output() contactsChange = new EventEmitter<Contact[]>();
  public contactsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.setContacts(this.contacts || []);
    this.listenChanges();
  }

  private createForm() {
    this.contactsForm = this.fb.group({
      links: this.fb.array([]),
    });
  }

  private setContacts(links: Contact[]) {
    const contactFG = links.map((link) => this.fb.group(link));
    this.contactsForm.setControl('contacts', this.fb.array(contactFG));
  }

  private listenChanges() {
    this.contactsForm.valueChanges.subscribe((contacts) => {
      const formattedLinks = contacts.contacts.map((contact: Contact) => ({
        type: contact.type,
        value: contact.value,
        icon: contact.icon,
      }));
      this.contactsChange.emit(formattedLinks);
    });
  }

  get contactsArray(): FormArray {
    return this.contactsForm.get('contacts') as FormArray;
  }

  clear(index: number) {
    const contactGroup = this.contactsArray.at(index) as FormGroup;
    contactGroup.patchValue({
      value: '',
    });
  }
}
