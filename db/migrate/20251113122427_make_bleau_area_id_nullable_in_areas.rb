class MakeBleauAreaIdNullableInAreas < ActiveRecord::Migration[8.0]
  def change
    change_column_null :areas, :bleau_area_id, true
  end
end
