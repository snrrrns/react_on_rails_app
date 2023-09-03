class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :type
      t.date :date
      t.text :title
      t.string :speaker
      t.string :host
      t.boolean :published

      t.timestamps
    end
  end
end
