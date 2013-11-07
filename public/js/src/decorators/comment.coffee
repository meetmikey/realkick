class CommentDecorator

  decorate: (model) =>
    object = {}
    if not model
      return object

    object.text = model.get 'text'
    object.userImageURL = model.get 'userImageURL'

    object


RealKick.Decorator.Comment = new CommentDecorator()