import { INTEGER, Model, STRING } from 'sequelize';
import sequelize from '../config/sequelize';
import { FlashCard } from './flashcards';
import { Language } from './languages';

export class FlashCardLocalize extends Model {

}

export class FlashCardLocalizeModel {
    constructor(){}
    flashcardLocalizeId: number;
    term: string;
    description: string;
  }
  
  FlashCardLocalize.init(
    {
        flashcardLocalizeId: { field: 'flashcard_localize_id', type: INTEGER, primaryKey: true, autoIncrement: true },
        term: { field: 'term', type: STRING },
        description: { field: 'description', type: STRING }
    },
    { sequelize, modelName: 'flashcard_localize', timestamps: false, freezeTableName: true }
  )

  FlashCardLocalize.belongsTo(Language, {
    foreignKey: 'language_id'
  })
  FlashCardLocalize.belongsTo(FlashCard, {
    foreignKey: 'flashcard_id'
  })
  FlashCard.hasMany(FlashCardLocalize, {foreignKey: 'flashcard_id'});