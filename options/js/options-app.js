/* global chrome */

(function() {

  var utils = window.utils

  window.ruleCtrl = function($scope) {

    var saveOptions = function() {
      utils.saveData('switch', $scope.switch)
      utils.saveData('rules', $scope.rules)
      chrome.extension.sendRequest({
        ask: 'reload'
      })
    }

    var ctrlInit = function() {
      $scope.switch = utils.getData('switch')
      $scope.rules = utils.getData('rules')
      $scope.rules.search = $scope.rules.search || []
      $scope.rules.share = $scope.rules.share || []
      $scope.rules.imageSearch = $scope.rules.imageSearch || []

      $scope.$_suspend = {
        search: {
          enabled: true
        },
        share: {
          enabled: true
        },
        imageSearch: {
          enabled: true
        }
      }
    }

    $scope.editClick = function(rule) {
      rule.$_name = rule.name
      rule.$_url = rule.url
      rule.$_edit = true
    }

    $scope.cancelClick = function(rule) {
      rule.$_name = rule.$_url = null
      rule.$_edit = false
    }

    $scope.submitClick = function(rule) {
      rule.name = rule.$_name
      rule.url = rule.$_url
      rule.$_url = rule.$_url = null
      rule.$_edit = false
    }

    $scope.deleteClick = function(rule, rules) {
      rules.splice(rules.indexOf(rule), 1)
    }

    $scope.addClick = function(type) {
      var rule = $scope.$_suspend[type]
      $scope.rules[type].push(rule)
      $scope.$_suspend[type] = {
        enabled: true
      }
    }

    $scope.resetClick = function() {
      var resetConfirm = window.confirm('你确认重置选项吗？')
      if (!resetConfirm) {
        return
      }
      chrome.extension.sendRequest({
        ask: 'reset'
      }, function() {
        ctrlInit()
        $scope.$digest()
      })
    }

    $scope.upClick = function(rule, rules) {
      var count = rules.length
      var index = rules.indexOf(rule)
      var indexEx = (count + index - 1) % count
      // exchange
      rules[index] = rules[indexEx]
      rules[indexEx] = rule
    }

    $scope.downClick = function(rule, rules) {
      var count = rules.length
      var index = rules.indexOf(rule)
      var indexEx = (count + index + 1) % count
      // exchange
      rules[index] = rules[indexEx]
      rules[indexEx] = rule
    }
    
    $scope.importClick = function () {
      var importInfo=prompt("配置内容。备份请复制后保存；导入请粘贴后确认。",JSON.stringify($scope.rules));
      if (importInfo!=null && importInfo!=""){
        $scope.rules = JSON.parse(importInfo)
        saveOptions()
        window.alert("导入成功！")
      }
    }

    $scope.$watch('rules',
      function() {
        saveOptions()
      },
      true
    )

    $scope.$watch('settingMore',
      function() {
        saveOptions()
      },
      true
    )

    $scope.message = {
      onoff: {
        true: '点击禁用',
        false: '点击启用'
      }
    }

    ctrlInit()
  }
})()
