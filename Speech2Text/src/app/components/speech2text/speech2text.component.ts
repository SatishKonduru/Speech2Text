import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../../services/speech.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-speech2text',
  templateUrl: './speech2text.component.html',
  styleUrl: './speech2text.component.css'
})
export class Speech2textComponent implements OnInit{
  text: string;
  isListening: boolean = false;
  transcript: string = '';
  speechForm : any = FormGroup
  constructor(public _speech: SpeechService, private _formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.speechForm = this._formBuilder.group({
      speech: [null, [Validators.required]]
    })

    this._speech.init()
  }
  toggleListening(): void {
    if (this.isListening) {
      this.stopService()
    } else {
      this.startService()

    }
    this.isListening = !this.isListening;
  }
  startService(){
    this._speech.start()
  }

  stopService(){
    this._speech.stop()
  }
}
