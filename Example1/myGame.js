room = game.createRoom("room", "배경-1.png")
room2 = game.createRoom("room2", "배경-4.png")

// room
// 오른쪽 문 생성
room.door = room.createObject("door", "문-오른쪽-닫힘.png")
room.door.setWidth(136)
room.locateObject(room.door,1049,300)
room.door.lock()

// 왼쪽 문 생성
room.door2 = room.createObject("door2", "문-오른쪽-닫힘.png")
room.door2.setWidth(136)
room.locateObject(room.door2,777,253)
room.door2.lock()

// 오른쪽 문 동작
room.door.onClick = function(){
    if(room.door.isClosed()){
        room.door.open()
    } else if (room.door.isOpened()){
        game.clear()
    } else if (room.door.isLocked()){
        printMessage("문이 잠겨있다")
    }
}

room.door.onOpen = function(){
    room.door.setSprite("문-오른쪽-열림.png")
}

// 왼쪽 문 동작
room.door2.onClick = function(){
    if(room.door2.isClosed()){
        room.door2.open()
    } else if (room.door2.isOpened()){
        game.move(room2)
    } else if (room.door2.isLocked()){
        printMessage("문이 잠겨있다")
    }
}
// 왼쪽 문 동작
room.door2.onOpen = function(){
    room.door2.setSprite("문-오른쪽-열림.png")
}

// 오른쪽 키패드 생성 
room.keypad = room.createObject("keypad", "숫자키-우.png")
room.keypad.setWidth(50)
room.locateObject(room.keypad, 930, 250)

// 숨겨진 키패드 생성
room.keypad3 = room.createObject("keypad3", "숫자키-우.png")
room.keypad3.setWidth(50)
room.locateObject(room.keypad3, 930, 290)
room.keypad3.hide()

// 숨겨진 키패드 동작
room.keypad3.onClick = function(){
    printMessage("영화 '살인의 추억'이 개봉한 날짜는?")
    showKeypad("number", "0425", function(){
        room.door.unlock()
        printMessage("오른쪽 문이 열리는 소리가 들렸다.")
    })
}

// 오른쪽 키패드 동작
room.keypad.onClick = function(){
    printMessage("영화 '살인의 추억'이 개봉한 해는?")
    showKeypad("number", "2003", function(){
        room.keypad3.show()
        printMessage("벽에서 새로운 키패드가 나타났다.")
    })
}

//왼쪽 키패드 생성
room.keypad2 = room.createObject("keypad2", "숫자키-우.png")
room.keypad2.setWidth(50)
room.locateObject(room.keypad2, 638, 210)

// 왼쪽 키패드 동작
room.keypad2.onClick = function(){
    printMessage("영화 '올드보이'가 개봉한 해는?")
    showKeypad("number", "2003", function(){
        room.door2.unlock()
        printMessage("왼쪽 문의 잠금장치가 열리는 소리가 들렸다.")
    })
}

// 힌트용 선반 생성
room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)

// 힌트용 책 생성
room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 140)
room.book.onClick = function(){
    showImageViewer("종이.png", "책.txt");
}

//room2
//오대수의 침대
room2.sofa = room2.createObject("sofa", "소파-좌.png")
room2.sofa.setWidth(600)
room2.locateObject(room2.sofa, 200, 400)

//room2 문 
room2.door = room2.createObject("door", "문-오른쪽-열림.png") // 문 생성
room2.door.setWidth(136) // 크기 조절
room2.locateObject(room2.door, 1049, 305) // 문 배치
room2.door.open() // door 상태를 opened로 변경

room2.door.onClick = function(){
	game.move(room) // room으로 이동
}

//room2 TV다이
room2.shell = room2.createObject("shell", "교탁-오른쪽.png")
room2.shell.setWidth(300)
room2.locateObject(room2.shell,720,370)

//room2 TV
room2.tv = room2.createObject("tv", "TV-오른쪽.png")
room2.tv.setWidth(200)
room2.locateObject(room2.tv, 730,225)

// 힌트용 선반 생성
room2.shelf = room2.createObject("shelf", "선반-좌.png")
room2.shelf.setWidth(460)
room2.locateObject(room2.shelf, 250, 150)

// 힌트용 책 생성
room2.book2 = room2.createObject("book2", "책3-1.png")
room2.book2.setWidth(80)
room2.locateObject(room2.book2, 100, 140)
room2.book2.onClick = function(){
    showImageViewer("종이.png", "room2.txt")
}

game.start(room)
printMessage("방탈출에 오신 것을 환영합니다!")