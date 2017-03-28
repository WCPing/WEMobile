/**
 * Created by Administrator on 2017/3/23.
 */
(function(){
    angular.module('controllers', [])
        .controller('HomeTabCtrl', function($scope) {

            $scope.myActiveSlide = 1;
        })
        .controller( 'talksCtrl',['$scope','$ionicActionSheet','$timeout' ,function($scope,$ionicActionSheet,$timeout){
            $scope.show = function() {

                var hideSheet = $ionicActionSheet.show({
                    buttons: [
                        { text: '从相册寻找图片' },
                        { text: '纯文字动态' }
                    ],
                    //destructiveText: 'Delete',
                    titleText: '动态可以带图片或者是纯文字',
                    cancelText: '取消',
                    cancel: function() {
                        // add cancel code..
                    },
                    buttonClicked: function(index) {
                        //index == 0 //相册
                        //index == 1 //第二个按钮操作
                        if(index == 0){
                            console.log("图片动态");
                        }else if(index == 1){
                            console.log("文字动态");
                        }
                        return true;
                    }
                });

                $timeout(function() {
                    hideSheet();
                }, 9000); //3秒后隐藏

            };
        }])
        .controller('newsCtrl', function($scope) {
                    //定义要聚焦的索引
                    $scope.focusIndex=0;

                    $scope.recHide = false;
                    $scope.hotHide = true;

                    $scope.titleClick = function(index){
                        $scope.focusIndex=index; //点击切换样式

                        if(index == 0){
                            $scope.recHide = false;
                            $scope.hotHide = true;
                        }else if(index == 1){
                            $scope.recHide = true;
                            $scope.hotHide = false;
                        }
            }
        })
    ;
})();