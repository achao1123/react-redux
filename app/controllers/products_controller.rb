class ProductsController < ApplicationController
  include ReactOnRails::Controller
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  before_action :set_products, only: [:index, :cart]
  before_action :set_cart, only: [:add_to_cart, :remove_from_cart]

  # GET /products
  # GET /products.json
  def index
    redux_store("appStore", props: products_json_string)
    render_html
  end

  def cart
    redux_store("appStore", props: products_json_string)
    render_html
  end

  # GET /products/1
  # GET /products/1.json
  def show
  end

  # GET /products/new
  def new
    @product = Product.new
  end

  # GET /products/1/edit
  def edit
  end

  # POST /products
  # POST /products.json
  def create
    @product = Product.new(product_params)

    respond_to do |format|
      if @product.save
        format.html { redirect_to @product, notice: 'Product was successfully created.' }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to @product, notice: 'Product was successfully updated.' }
        format.json { render :show, status: :ok, location: @product }
      else
        format.html { render :edit }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product.destroy
    respond_to do |format|
      format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def add_to_cart
    @product = Product.find(params[:product][:id])
    @cart.products << @product if @product

    respond_to do |format|
      if @cart.save
        format.json { render json: @product }
      end
    end
  end

  def remove_from_cart
    @product = Product.find(params[:productId])
    @cart.products.delete(@product) if @product

    respond_to do |format|
      if @cart.save
        format.json { render json: @product }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    def set_cart
      @cart = Cart.find(session[:cart_id])
    end 

    def set_products
      @products = Product.order("id DESC").limit(10)
      @cart = Cart.last
      session[:cart_id] = @cart.id
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def product_params
      params.require(:product).permit(:title, :price, :image)
    end

    def products_json_string
      render_to_string(template: "/products/index.json.jbuilder",
                       locals: { products: @products, cart: @cart }, format: :json)
    end

    def render_html
      respond_to do |format|
        format.html
      end
    end
end
