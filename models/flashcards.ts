import { INTEGER, Model, STRING } from 'sequelize';
import sequelize from '../config/sequelize';
import { FlashcardController } from '../controllers';
import { FlashCardLocalize } from './flashcard-localize';

export class FlashCard extends Model {

}

export class FlashCardModel {
    constructor(){}
    flashcardId: number;
    flashcardTemplate: string;
  }
  
  FlashCard.init(
    {
        flashcardId: { field: 'flashcard_id', type: INTEGER, primaryKey: true, autoIncrement: true },
        flashcardTemplate: { field: 'flashcard_template', type: STRING },
    },
    { sequelize, modelName: 'flashcards', timestamps: false }
  )

  //FlashCard.hasMany(FlashCardLocalize, {as: 'flashcard_localizes', foreignKey: 'flashcard_id'});