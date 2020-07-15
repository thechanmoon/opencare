require 'test_helper'

class TraitsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get traits_index_url
    assert_response :success
  end

end
