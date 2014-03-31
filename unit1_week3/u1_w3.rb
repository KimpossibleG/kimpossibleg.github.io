
def total(array)
	sum = 0
	array.each { |i| sum += i }
	sum
end


def sentence_maker(array)
	sentence = array[0].capitalize!
	x = 0
	while x < array.length - 1
		sentence = sentence + " " + array[x + 1].to_s
		x = x + 1
	end
	sentence + "."
end

