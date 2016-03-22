class Tag < ActiveRecord::Base
	has_many :taggings
    has_many :blogs, through: :taggings

    def self.counts
    	self.select("name, count(taggings.tag_id) as count").joins(:taggings).group("taggings.tag_id")
    end
    def blog_count
    	self.taggings.count
    end
end
