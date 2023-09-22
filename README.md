# Frontend_Projects

class Solution {
    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> list=new ArrayList<>();
        Queue<TreeNode> q=new LinkedList<>();
        q.add(root);
        // list.add(root.val);
        while(!q.isEmpty()){
            // TreeNode pop=q.remove();
            int size=q.size();
            

            Double sum=0.00000;
            for(int i=0;i<size;i++){
                TreeNode node=q.remove();
                if(node.left!=null){
                    q.add(node.left);
                    // System.out.println("left "+ node.left.val);
                
                 }
                if(node.right!=null){
                    q.add(node.right);
                    // System.out.println("right "+ node.right.val);
                }

                sum=sum+node.val;
                // System.out.println(sum);
            }
            list.add(sum/size);
            
        }
        return list;

        
    }
}
