ActiveAdmin.register Blog do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
 permit_params :title, :active, :content, :refrence,:short_description ,:all_tags
   form do |f|
    f.semantic_errors *f.object.errors.keys
    f.input :title
    f.input :all_tags
    f.input :short_description
    f.input :content, as: :wysihtml5, commands: [:bold, :italic, :underline, :ul, :ol, :outdent, :indent, :link, :image, :video, :source ], blocks: [ :h1, :h2, :h3, :h4, :h5, :h6, :p]
    f.input :active
    f.input :refrence
    f.actions
  end


end
