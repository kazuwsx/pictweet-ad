class TweetsController < ApplicationController

  before_action :redirect_to_index, :except => [:index]

  def index
    @tweets = Tweet.includes(:user).page(params[:page]).per(5).order("created_at DESC")
  end

  def show
    @tweet = Tweet.find(params[:id])
    @comments = @tweet.comments.includes(:user)
  end

  def new
  end

  def create
    tweets = ["https://i.ytimg.com/vi/I6AnD0RWcKQ/maxresdefault.jpg", "http://livedoor.blogimg.jp/jin115/imgs/e/9/e9df9abb.jpg", "https://static.curazy.com/wp-content/uploads/2016/01/d96e13976a4b60f3fb326ab4e7fd7577-600x315.jpg", "http://livedoor.blogimg.jp/jin115/imgs/7/4/74c1917d.jpg", "https://www.wowow.co.jp/sports/tennis/info/img2/detail_180129_03_photo.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU-GUVUX_6oQdsHnkKU695oCc2Iv7GUrBHfn4gR8N3EawDtEb7FA"]
    Tweet.create(image: tweets.sample, text: tweet_params[:text], user_id: current_user.id)
  end

  def destroy
    tweet = Tweet.find(id_params[:id])
    tweet.destroy if tweet.user_id == current_user.id
  end

  def edit
    @tweet = Tweet.find(id_params[:id])
  end

  def update
    tweet = Tweet.find(id_params[:id])
    tweet.update(tweet_params) if tweet.user_id == current_user.id
  end

  private
  def tweet_params
    params.permit(:image, :text)
  end

  def id_params
    params.permit(:id)
  end

  def redirect_to_index
    redirect_to :action => "index" unless user_signed_in?
  end
end
