class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :img_url, :follows


  def follows
    follows = Follow.where(user_id: self.object.id)

    return follows
    

  end


end


