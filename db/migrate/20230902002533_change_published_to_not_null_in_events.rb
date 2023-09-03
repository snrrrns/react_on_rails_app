class ChangePublishedToNotNullInEvents < ActiveRecord::Migration[7.0]
  def change
    change_column_null :events, :published, false
  end
end
