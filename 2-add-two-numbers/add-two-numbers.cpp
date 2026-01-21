/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        if (l1 == NULL) return l2;
        if (l2 == NULL) return l1;
        int carry = 0;
        int data;
        ListNode* temp = new ListNode();
        ListNode* curr = temp;
        while (l1 != NULL || l2 != NULL) {
            int sum = 0;
            if (l1 != NULL) {
                sum += l1->val;
                l1 = l1->next;
            }
            if (l2 != NULL) {
                sum += l2->val;
                l2 = l2->next;
            }
            sum += carry;
            data = sum % 10;
            carry = sum / 10;

            temp->next = new ListNode(data);
            temp = temp->next;
        }

        if (carry > 0) {
            temp->next = new ListNode(carry); 
        }

        return curr->next; 
    }
};